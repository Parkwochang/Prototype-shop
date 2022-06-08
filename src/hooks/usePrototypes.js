import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

export default function usePrototyes() {
  const { prototypes } = useContext(AppStateContext);

  return prototypes;
}
