# Usage
### Widget 1
![](assets/Screenshot%202022-11-23%20at%208.29.19%20PM.png)<!-- {"width":155} -->
```
<Widget1 size={200} />
```

#### Widget 2
![](assets/Screenshot%202022-11-23%20at%208.29.48%20PM.png)<!-- {"width":159} -->
```
<Widget2
	width={200}
	defaultValue={4}
	showStatus={true} />
```

#### Linear Slider
![](assets/Screenshot%202022-11-23%20at%208.30.11%20PM.png)<!-- {"width":254} -->
```
const [value, setValue] = useState(0)

<LinearSlider
	width={200}
	max={10}
	value={value}
	setValue={setValue} />
```

#### Circular Progress
![](assets/Screenshot%202022-11-23%20at%208.30.33%20PM.png)<!-- {"width":163} -->
```
const [value, setValue] = useState(0)

<CircularProgress
	size={200}
	value={value}
	setValue={setValue}
	parentStyle={{ marginBottom: "30px" }}
	percentage={(value / 10) * 100} />
```

# Options
#### Widget 1
| Property | Type | Description        | Default |
|----------|------|--------------------|---------|
| size     | Int  | Size of the widget | 200     |

#### Widget 2
| Property     | Type    | Description                                    | Default |
|--------------|---------|------------------------------------------------|---------|
| width        | Int     | Size of the widget                             | 200     |
| defaultValue | Int     | Default value of the widget (0-4)              | 0       |
| showStatus   | Boolean | To display the status text (Low, Medium, High) | true    |

#### Linear Slider
| Property | Type     | Description                 | Default |
|----------|----------|-----------------------------|---------|
| width    | Int      | Width of the widget         | 200     |
| min      | Int      | Minimum value of the slider | 0       |
| max      | Int      | Maximum value of the slider | 100     |
| value    | Int      | Value of the widget         | -       |
| setValue | Function | function with 1 parameter   | -       |

#### Circular Progress
| Property    | Type | Description                       | Default |
|-------------|------|-----------------------------------|---------|
| size        | Int  | Size of the widget                | 200     |
| value       | Int  | Value of the widget               | 0       |
| percentage  | Int  | Percentage of the progress circle | 0       |
| strokeWidth | Int  | Width of the progress circle      | 3       |
