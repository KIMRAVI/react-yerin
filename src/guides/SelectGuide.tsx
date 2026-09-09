import { useState } from "react";
import GuideLayout from "./GuideLayout";
import layoutStyles from "./GuideLayout.module.scss";
import Select from "../components/Select/Select";
import type { SelectOption } from "../components/Select/Select";

const FRUIT_OPTIONS: SelectOption[] = [
  { value: "apple", label: "사과" },
  { value: "banana", label: "바나나" },
  { value: "cherry", label: "체리" },
  { value: "grape", label: "포도" },
  { value: "mango", label: "망고" },
  { value: "orange", label: "오렌지" },
  { value: "peach", label: "복숭아" },
  { value: "pear", label: "배" },
  { value: "watermelon", label: "수박" },
];

const CITY_OPTIONS: SelectOption[] = [
  { value: "seoul", label: "서울" },
  { value: "busan", label: "부산" },
  { value: "daegu", label: "대구", disabled: true },
  { value: "incheon", label: "인천" },
  { value: "gwangju", label: "광주", disabled: true },
  { value: "suwon", label: "수원" },
];

export default function SelectGuide() {
  const [fruit, setFruit] = useState<string | null>(null);
  const [city, setCity] = useState<string | null>("seoul");

  return (
    <GuideLayout title="Select" className={layoutStyles.container}>
      <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 8 }}>
        MUI 없이 마크업 + CSS + ARIA만으로 직접 구현한 커스텀 셀렉트박스입니다.
      </p>

      <p className={layoutStyles.sectionTitle}>Basic</p>
      <Select
        label="좋아하는 과일"
        options={FRUIT_OPTIONS}
        value={fruit}
        onChange={setFruit}
        placeholder="과일을 선택하세요"
      />
      <p style={{ marginTop: 12, fontSize: 13, color: "#6b7280" }}>
        선택된 값: {fruit ?? "(없음)"}
      </p>

      <p className={layoutStyles.sectionTitle}>Disabled option</p>
      <Select
        label="방문할 도시"
        options={CITY_OPTIONS}
        value={city}
        onChange={setCity}
      />
      <p style={{ marginTop: 12, fontSize: 13, color: "#6b7280" }}>
        선택된 값: {city ?? "(없음)"}
      </p>

      <p className={layoutStyles.sectionTitle}>키보드 지원</p>
      <ul style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.8 }}>
        <li>
          <b>Enter / Space / ↓ / ↑</b> — 닫혀 있을 때 목록 열기
        </li>
        <li>
          <b>↑ / ↓</b> — 옵션 간 이동 (비활성 옵션은 건너뜀)
        </li>
        <li>
          <b>Home / End</b> — 첫/마지막 옵션으로 이동
        </li>
        <li>
          <b>Enter / Space</b> — 활성 옵션 선택 후 닫기
        </li>
        <li>
          <b>Esc</b> — 선택 변경 없이 닫기
        </li>
        <li>
          <b>문자 입력</b> — 타이핑한 글자로 시작하는 옵션으로 바로 이동
          (타입어헤드)
        </li>
      </ul>
    </GuideLayout>
  );
}
