import { boardsReducer } from "../slices/boardsSlice";
import { loggerReducer } from "../slices/loggerSlices";
import { modalReducer } from "../slices/modalSlice";

const reducer = {
  logger: loggerReducer,
  boards: boardsReducer,
  modal: modalReducer,
};

export default reducer;
  