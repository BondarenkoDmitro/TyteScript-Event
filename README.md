# TypeScript KeyCode Event Properties

## Завдання

Зробити сторінку на суть якої полягає в відстеженні нажаття користувачем на кнопки на клавіатурі. На сторінці в 4 картточках повинна відображатись інформація про нажаття а саме:

### Основні властивості KeyboardEvent:

- **keyCode** — числовий код клавіші (застарілий, але все ще використовується)
- **code** — рядок, що ідентифікує фізичну клавішу на клавіатурі
- **key** — значення символу, що відповідає натиснутій клавіші
- **ctrlKey** — булеве значення, що вказує на статус клавіші Ctrl

### Вимоги до реалізації:

Для кожної з 4-х картточок потрібно додати опис що означає кожна з чотирьох властивостей (keyCode, code, key, ctrlKey):

1. **keyCode** — Числовой идентификатор клавиши. Каждой клавише присвоен уникальный код. Например, буква "A" имеет код 65, а цифра "1" имеет код 49.

2. **code** — Физическое расположение клавиши на клавиатуре. Значение не зависит от раскладки клавиатуры или нажатых модификаторов. Например, "KeyA" для буквы A, "Digit1" для цифры 1.

3. **key** — Символ или значение, связанное с нажатой клавишей, с учетом раскладки клавиатуры и модификаторов. Например, при нажатии "A" с Shift выводится "A", а без Shift выводится "a".

4. **ctrlKey** — Логическое значение, указывающее, была ли нажата клавиша Ctrl во время события. True если Ctrl был нажат, False если нет. Полезно для обнаружения комбинаций клавиш типа Ctrl+C.

---

# TypeScript KeyCode Event Properties

## Task

Create a page whose essence is to track user key presses on the keyboard. The page should display information about key presses in 4 cards, namely:

### Main KeyboardEvent Properties:

- **keyCode** — numerical code of the key (deprecated, but still used)
- **code** — string that identifies the physical key on the keyboard
- **key** — value of the character corresponding to the pressed key
- **ctrlKey** — boolean value indicating the status of the Ctrl key

### Implementation Requirements:

For each of the 4 cards, you need to add a description of what each of the four properties means (keyCode, code, key, ctrlKey):

1. **keyCode** — Numerical identifier of a key. Each key is assigned a unique code. For example, the letter "A" has code 65, and the digit "1" has code 49.

2. **code** — Physical location of a key on the keyboard. The value does not depend on keyboard layout or pressed modifiers. For example, "KeyA" for the letter A, "Digit1" for the digit 1.

3. **key** — Character or value associated with the pressed key, taking into account the keyboard layout and modifiers. For example, when pressing "A" with Shift, "A" is displayed, and without Shift, "a" is displayed.

4. **ctrlKey** — Boolean value indicating whether the Ctrl key was pressed during the event. True if Ctrl was pressed, False if not. Useful for detecting key combinations like Ctrl+C.