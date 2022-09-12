import {getResultCalculator} from "./getResultCalculator.js";
import {UI} from "./UI.js";
import {deletingExtraElements} from "./deletingExtraElements.js";
import {deletingElements} from "./deletingElements.js";
import {renderingCalculationHistory} from "./renderingCalculationHistory.js";

const history_results = [];

UI.BUTTON.addEventListener('click', () => renderingCalculationHistory(history_results,UI.RESULT))

UI.BUTTON.addEventListener('click', () => {
  if (UI.FIRST_NUMBER.value.length === 0 || UI.SECOND_NUMBER.value.length === 0) {
    return UI.RESULT.textContent = "enter the numbers"
  }

  UI.RESULT.textContent = getResultCalculator(
    UI.OPERATOR.value,
    Number(UI.FIRST_NUMBER.value),
    Number(UI.SECOND_NUMBER.value),
  );
  history_results.push(UI.RESULT.textContent);
});

UI.BUTTON.addEventListener('click', () => deletingExtraElements(UI.ALL_PREVIOUS_RESULTS.length, UI.PARENT_RESULTS ))

UI.PARENT_RESULTS.addEventListener('click', (event) => deletingElements(event))
