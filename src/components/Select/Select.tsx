import {
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import styles from "./Select.module.scss";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface SelectProps {
  label: string;
  options: SelectOption[];
  value: string | null;
  onChange: (value: string) => void;
  placeholder?: string;
}

const TYPEAHEAD_RESET_MS = 600;

export default function Select({
  label,
  options,
  value,
  onChange,
  placeholder = "선택해 주세요",
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [openUpward, setOpenUpward] = useState(false);

  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const typeaheadRef = useRef("");
  const typeaheadTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const baseId = useId();
  const buttonId = `${baseId}-button`;
  const listboxId = `${baseId}-listbox`;
  const labelId = `${baseId}-label`;

  const selectedIndex = options.findIndex((opt) => opt.value === value);
  const selectedOption = selectedIndex >= 0 ? options[selectedIndex] : null;

  const firstEnabledIndex = options.findIndex((opt) => !opt.disabled);
  const lastEnabledIndex = options.reduce(
    (acc, opt, i) => (!opt.disabled ? i : acc),
    -1,
  );

  const openList = (startIndex?: number) => {
    if (options.every((opt) => opt.disabled)) return;
    const fallback = selectedIndex >= 0 ? selectedIndex : firstEnabledIndex;
    setActiveIndex(startIndex ?? fallback);
    setOpen(true);
  };

  const closeList = () => setOpen(false);

  const commitSelection = (index: number) => {
    const option = options[index];
    if (!option || option.disabled) return;
    onChange(option.value);
    closeList();
  };

  const moveActive = (direction: 1 | -1) => {
    setActiveIndex((current) => {
      let next = current;
      for (let step = 0; step < options.length; step += 1) {
        next = (next + direction + options.length) % options.length;
        if (!options[next].disabled) return next;
      }
      return current;
    });
  };

  const jumpActive = (edge: "first" | "last") => {
    const target = edge === "first" ? firstEnabledIndex : lastEnabledIndex;
    if (target >= 0) setActiveIndex(target);
  };

  const runTypeahead = (char: string) => {
    if (typeaheadTimer.current) clearTimeout(typeaheadTimer.current);
    typeaheadRef.current += char.toLowerCase();
    const query = typeaheadRef.current;

    const searchFrom = open ? activeIndex + 1 : 0;
    const ordered = [
      ...options.slice(searchFrom),
      ...options.slice(0, searchFrom),
    ];
    const match = ordered.find(
      (opt) => !opt.disabled && opt.label.toLowerCase().startsWith(query),
    );

    if (match) {
      const matchIndex = options.indexOf(match);
      if (open) {
        setActiveIndex(matchIndex);
      } else {
        onChange(match.value);
      }
    }

    typeaheadTimer.current = setTimeout(() => {
      typeaheadRef.current = "";
    }, TYPEAHEAD_RESET_MS);
  };

  const handleButtonKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        if (!open) openList();
        else moveActive(1);
        break;
      case "ArrowUp":
        event.preventDefault();
        if (!open) openList();
        else moveActive(-1);
        break;
      case "Home":
        if (open) {
          event.preventDefault();
          jumpActive("first");
        }
        break;
      case "End":
        if (open) {
          event.preventDefault();
          jumpActive("last");
        }
        break;
      case "Enter":
      case " ":
        event.preventDefault();
        if (open) commitSelection(activeIndex);
        else openList();
        break;
      case "Escape":
        if (open) {
          event.preventDefault();
          closeList();
        }
        break;
      case "Tab":
        closeList();
        break;
      default:
        if (event.key.length === 1 && /\S/.test(event.key)) {
          runTypeahead(event.key);
        }
    }
  };

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) closeList();
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [open]);

  useLayoutEffect(() => {
    if (!open || !rootRef.current) return;
    const rect = rootRef.current.getBoundingClientRect();
    const estimatedHeight = Math.min(options.length * 40 + 8, 260);
    const spaceBelow = window.innerHeight - rect.bottom;
    setOpenUpward(spaceBelow < estimatedHeight && rect.top > estimatedHeight);
  }, [open, options.length]);

  useEffect(() => {
    if (!open) return;
    const activeEl = listRef.current?.querySelector(
      `[data-index="${activeIndex}"]`,
    );
    activeEl?.scrollIntoView({ block: "nearest" });
  }, [open, activeIndex]);

  return (
    <div className={styles.select} ref={rootRef}>
      <span id={labelId} className={styles.label}>
        {label}
      </span>
      <button
        type="button"
        ref={buttonRef}
        id={buttonId}
        className={styles.trigger}
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        aria-labelledby={`${labelId} ${buttonId}`}
        aria-activedescendant={
          open ? `${listboxId}-option-${activeIndex}` : undefined
        }
        onClick={() => (open ? closeList() : openList())}
        onKeyDown={handleButtonKeyDown}
      >
        <span
          className={selectedOption ? styles.value : styles.placeholder}
        >
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <svg
          className={`${styles.chevron} ${open ? styles.chevronOpen : ""}`}
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path
            d="M5 7.5L10 12.5L15 7.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <ul
          id={listboxId}
          role="listbox"
          aria-labelledby={labelId}
          className={`${styles.listbox} ${openUpward ? styles.listboxUp : ""}`}
          ref={listRef}
        >
          {options.map((option, index) => (
            <li
              key={option.value}
              id={`${listboxId}-option-${index}`}
              data-index={index}
              role="option"
              aria-selected={option.value === value}
              aria-disabled={option.disabled || undefined}
              className={[
                styles.option,
                index === activeIndex ? styles.optionActive : "",
                option.value === value ? styles.optionSelected : "",
                option.disabled ? styles.optionDisabled : "",
              ]
                .filter(Boolean)
                .join(" ")}
              onMouseEnter={() => !option.disabled && setActiveIndex(index)}
              onClick={() => commitSelection(index)}
            >
              <span>{option.label}</span>
              {option.value === value && (
                <svg
                  className={styles.check}
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    d="M4 10.5L8 14.5L16 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
