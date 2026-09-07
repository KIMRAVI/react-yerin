import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
// import styles from "./IconGuide.module.scss";
import GuideLayout from "./GuideLayout";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import Typography from "@mui/material/Typography";
import layoutStyles from "./GuideLayout.module.scss";

export default function BasicTextFields() {
  const outlinedStartId = React.useId();
  const outlinedWeightId = React.useId();
  const outlinedPasswordId = React.useId();
  const outlinedAmountId = React.useId();
  const filledStartId = React.useId();
  const filledWeightId = React.useId();
  const filledPasswordId = React.useId();
  const filledAmountId = React.useId();
  const standardStartId = React.useId();
  const standardWeightId = React.useId();
  const standardPasswordId = React.useId();
  const standardAmountId = React.useId();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  // An endAdornment coexists with the Select's chevron without overlapping it.
  const infoEndAdornment = (
    <InputAdornment position="end">
      <InfoOutlined />
    </InputAdornment>
  );
  const infoStartAdornment = (
    <InputAdornment position="start">
      <InfoOutlined />
    </InputAdornment>
  );

  return (
    <GuideLayout title="TextField" className={layoutStyles.container}>
      <Typography className={layoutStyles.sectionTitle}>
        Basic TextField
      </Typography>
      <Box
        component="form"
        sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </Box>

      <Typography className={layoutStyles.sectionTitle}>Form props</Typography>
      <Box
        component="form"
        sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
          />
          <TextField
            disabled
            id="outlined-disabled"
            label="Disabled"
            defaultValue="Hello World"
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <TextField
            id="outlined-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            slotProps={{
              input: {
                readOnly: true,
              },
            }}
          />
          <TextField id="outlined-search" label="Search field" type="search" />
          <TextField
            id="outlined-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
          />
        </div>
        <div>
          <TextField
            required
            id="filled-required"
            label="Required"
            defaultValue="Hello World"
            variant="filled"
          />
          <TextField
            disabled
            id="filled-disabled"
            label="Disabled"
            defaultValue="Hello World"
            variant="filled"
          />
          <TextField
            id="filled-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="filled"
          />
          <TextField
            id="filled-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            variant="filled"
            slotProps={{
              input: {
                readOnly: true,
              },
            }}
          />
          <TextField
            id="filled-search"
            label="Search field"
            type="search"
            variant="filled"
          />
          <TextField
            id="filled-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
            variant="filled"
          />
        </div>
        <div>
          <TextField
            required
            id="standard-required"
            label="Required"
            defaultValue="Hello World"
            variant="standard"
          />
          <TextField
            disabled
            id="standard-disabled"
            label="Disabled"
            defaultValue="Hello World"
            variant="standard"
          />
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
          />
          <TextField
            id="standard-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            variant="standard"
            slotProps={{
              input: {
                readOnly: true,
              },
            }}
          />
          <TextField
            id="standard-search"
            label="Search field"
            type="search"
            variant="standard"
          />
          <TextField
            id="standard-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
            variant="standard"
          />
        </div>
      </Box>

      <Typography className={layoutStyles.sectionTitle}>Error</Typography>
      <Box
        component="form"
        sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            error
            id="outlined-error"
            label="Error"
            defaultValue="Hello World"
          />
          <TextField
            error
            id="outlined-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
          />
        </div>
        <div>
          <TextField
            error
            id="filled-error"
            label="Error"
            defaultValue="Hello World"
            variant="filled"
          />
          <TextField
            error
            id="filled-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
            variant="filled"
          />
        </div>
        <div>
          <TextField
            error
            id="standard-error"
            label="Error"
            defaultValue="Hello World"
            variant="standard"
          />
          <TextField
            error
            id="standard-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
            variant="standard"
          />
        </div>
      </Box>

      <Typography className={layoutStyles.sectionTitle}>
        Input Adornments
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <div>
          <TextField
            label="With normal TextField"
            id={`${outlinedStartId}-input`}
            sx={{ m: 1, width: "25ch" }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">kg</InputAdornment>
                ),
              },
            }}
          />
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <OutlinedInput
              id={`${outlinedWeightId}-input`}
              endAdornment={<InputAdornment position="end">kg</InputAdornment>}
              aria-describedby={`${outlinedWeightId}-helper-text`}
              inputProps={{
                "aria-label": "weight",
              }}
            />
            <FormHelperText id={`${outlinedWeightId}-helper-text`}>
              Weight
            </FormHelperText>
          </FormControl>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <InputLabel htmlFor={`${outlinedPasswordId}-input`}>
              Password
            </InputLabel>
            <OutlinedInput
              id={`${outlinedPasswordId}-input`}
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <div>
            <FormControl sx={{ m: 1, width: "25ch" }}>
              <InputLabel htmlFor={`${outlinedAmountId}-input`}>
                Amount
              </InputLabel>
              <OutlinedInput
                id={`${outlinedAmountId}-input`}
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                label="Amount"
              />
            </FormControl>
            <TextField
              select
              label="Select"
              defaultValue={20}
              sx={{ m: 1, width: "25ch" }}
              slotProps={{ select: { endAdornment: infoEndAdornment } }}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </TextField>
            <TextField
              select
              label="Native"
              defaultValue={20}
              sx={{ m: 1, width: "25ch" }}
              slotProps={{
                select: { native: true, startAdornment: infoStartAdornment },
              }}
            >
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </TextField>
          </div>
        </div>
        <div>
          <TextField
            label="With normal TextField"
            id={`${filledStartId}-input`}
            sx={{ m: 1, width: "25ch" }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">kg</InputAdornment>
                ),
              },
            }}
            variant="filled"
          />
          <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
            <FilledInput
              id={`${filledWeightId}-input`}
              endAdornment={<InputAdornment position="end">kg</InputAdornment>}
              aria-describedby={`${filledWeightId}-helper-text`}
              inputProps={{
                "aria-label": "weight",
              }}
            />
            <FormHelperText id={`${filledWeightId}-helper-text`}>
              Weight
            </FormHelperText>
          </FormControl>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
            <InputLabel htmlFor={`${filledPasswordId}-input`}>
              Password
            </InputLabel>
            <FilledInput
              id={`${filledPasswordId}-input`}
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <div>
            <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
              <InputLabel htmlFor={`${filledAmountId}-input`}>
                Amount
              </InputLabel>
              <FilledInput
                id={`${filledAmountId}-input`}
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
              />
            </FormControl>
            <TextField
              select
              label="Select"
              defaultValue={20}
              variant="filled"
              sx={{ m: 1, width: "25ch" }}
              slotProps={{ select: { endAdornment: infoEndAdornment } }}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </TextField>
            <TextField
              select
              label="Native"
              defaultValue={20}
              variant="filled"
              sx={{ m: 1, width: "25ch" }}
              slotProps={{
                select: { native: true, startAdornment: infoStartAdornment },
              }}
            >
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </TextField>
          </div>
        </div>
        <div>
          <TextField
            label="With normal TextField"
            id={`${standardStartId}-input`}
            sx={{ m: 1, width: "25ch" }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">kg</InputAdornment>
                ),
              },
            }}
            variant="standard"
          />
          <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "25ch" }}>
            <Input
              id={`${standardWeightId}-input`}
              endAdornment={<InputAdornment position="end">kg</InputAdornment>}
              aria-describedby={`${standardWeightId}-helper-text`}
              inputProps={{
                "aria-label": "weight",
              }}
            />
            <FormHelperText id={`${standardWeightId}-helper-text`}>
              Weight
            </FormHelperText>
          </FormControl>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
            <InputLabel htmlFor={`${standardPasswordId}-input`}>
              Password
            </InputLabel>
            <Input
              id={`${standardPasswordId}-input`}
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <div>
            <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
              <InputLabel htmlFor={`${standardAmountId}-input`}>
                Amount
              </InputLabel>
              <Input
                id={`${standardAmountId}-input`}
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
              />
            </FormControl>
            <TextField
              select
              label="Select"
              defaultValue={20}
              variant="standard"
              sx={{ m: 1, width: "25ch" }}
              slotProps={{ select: { endAdornment: infoEndAdornment } }}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </TextField>
            <TextField
              select
              label="Native"
              defaultValue={20}
              variant="standard"
              sx={{ m: 1, width: "25ch" }}
              slotProps={{
                select: { native: true, startAdornment: infoStartAdornment },
              }}
            >
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </TextField>
          </div>
        </div>
      </Box>
    </GuideLayout>
  );
}
