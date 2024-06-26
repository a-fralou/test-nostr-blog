"use client";
import { styled } from "@mui/material/styles";
import { List, ListProps, Box } from "@mui/material";

export const StyledList = styled((props: ListProps) => {
  return <List {...props} />;
})({
  width: "100%",
  maxWidth: 360,
  margin: "auto",
});

export const StyledListWrap = styled(Box)(() => ({
  display: "flex",
  height: "100%",
  width: "100%",
}));
