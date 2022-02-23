export type BaseColor = 'inherit' | 'default' | 'primary' | 'accent' | 'warning' | 'info' | 'success' | 'danger' | 'secondary';
export type TripleColor = 'default' | 'primary' | 'accent';

export type BaseSize = 'default' | 'extra-small' | 'small' | 'large' | 'extra-large';

export type TextAlign = 'start' | 'center' | 'end' | 'stretched';

export type Headings = '1' | '2' | '3' | '4' | '5' | '6';

export type ButtonType = 'basic' | 'flat' | 'raised' | 'stroked';

export type FlexJustify =
	| 'flex-start'
	| 'flex-end'
	| 'center'
	| 'space-between'
	| 'space-around'
	| 'space-evenly'
	| 'start'
	| 'end'
	| 'left'
	| 'right';
export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

export type FlexAlignItem =
	| 'stretch'
	| 'flex-start'
	| 'flex-end'
	| 'center'
	| 'baseline'
	| 'first baseline'
	| 'last baseline'
	| 'start'
	| 'end'
	| 'self-start'
	| 'self-end';

export type FlexAlignSelf = 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';

export type FlexAlignContent =
	| 'normal'
	| 'flex-start'
	| 'flex-end'
	| 'center'
	| 'space-between'
	| 'space-around'
	| 'space-evenly'
	| 'stretch'
	| 'start'
	| 'end'
	| 'baseline'
	| 'first baseline'
	| 'last baseline';

export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
export type FlexGap =
	| '0'
	| '1'
	| '2'
	| '3'
	| '4'
	| '5'
	| '6'
	| '7'
	| '8'
	| '9'
	| '10'
	| '11'
	| '12'
	| '13'
	| '14'
	| '15'
	| '16'
	| '17'
	| '18'
	| '19'
	| '20'
	| '21'
	| '22'
	| '23'
	| '24'
	| '25'
	| '26'
	| '27'
	| '28'
	| '29'
	| '30'
	| '31'
	| '32'
	| '33'
	| '34'
	| '35'
	| '36'
	| '37'
	| '38'
	| '39'
	| '40'
	| '41';

export type DividerDirection = 'horizontal' | 'vertical';

export type ElevationLevel = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

export type GridContentAlign = 'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly';

export type GridJustifyItems = 'start' | 'end' | 'center' | 'stretch';

export type GridAlignItems = GridJustifyItems | 'baseline';

export type GridAutoFlow = 'row' | 'column' | 'dense';

export type FormElementType = 'number' | 'checkbox' | 'text' | 'password' | 'button' | 'email' | 'search' | 'select';

export type ColumnSize = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';

export type MenuPosition = 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
