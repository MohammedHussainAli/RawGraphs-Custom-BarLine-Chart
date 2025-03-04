# BarLine chart for RAWGraphs

This custom chart is intedend to be used in https://app.rawgraphs.io/.

## What are BarLinecharts

![](https://raw.githubusercontent.com/rawgraphs/rawgraphs-paired-barchart/master/src/barchartpaired/barchartpaired_thumb.svg)

The BarLine Chart combines bar charts and line charts into a single visualization, allowing you to:

Compare two numerical dimensions for each category — bars for one value (e.g., sales, volume) and a line for another (e.g., growth rate, trend).
Visualize trends and relationships between values across categories.
Easily identify patterns, peaks, and dips by combining bar heights and line slopes.
This chart is perfect for showing comparisons between actual vs. target values, revenue vs. profit margins, or volume vs. trend lines.

## Installation

- Download the latest release from the side panel on this page, or via [this link](https://github.com/MohammedHussainAli/RawGraphs-Custom-BarLine-Chart).
- In [RAWgraphs interface](https://app.rawgraphs.io/), load a dataset. You can use sample data set.
- In the section `"2. Choose a chart"` scroll down and click on the button `"Load your chart"`
- Select the `"Load from file"` tab
- Drag and drop the downloaded file
- Click on `"Load your chart"` button
- A pop-up will inform you that you are loading an external piece of code, click on `"continue"` to load it
- You are now ready to use the chart

## Tutorial

In this tutorial we'll create population pyramid for Germany in 2019.

#### Dataset

Load the dataset you can find at [this link](https://raw.githubusercontent.com/rawgraphs/rawgraphs-paired-barchart/master/example/datasets/population_2019.csv). The dataset contains three columns: the age group, number of male people, and number of female people for that age group.

#### Chart Selection

select "Paired Barchart". If you don't see it, read the section [Installation](#Installation).

#### Mapping

Drag and drop the data dimensions into the chart's mapping panel:

Category → X Axis (e.g., Months, Products)
Bar Value → Bar Height (e.g., Sales, Volume)
Line Value → Line Position (e.g., Growth, Trend)

#### Customize

The BarLine Chart allows several customizations to make your visualizations stand out:

Axes
Adjust tick size and rotation to handle long labels.
Set the bar padding for better spacing between bars.
Bars and Lines
Change bar colors and line colors using custom gradients.
Enable or disable data labels for both bars and lines.
Toggle dots on the line chart to highlight data points.



## Contribute

If you'd like to contribute, follow the RAWGraphs [custom template guide](https://github.com/rawgraphs/custom-rawcharts-template).

## Credits

Original code by [@blindguardian50](https://github.com/blindguardian50) [@steve1711](https://github.com/steve1711), [@TheAlmightySpaceWarrior](https://github.com/TheAlmightySpaceWarrior), [@wizardry8](https://github.com/wizardry8) under the supervision of [@kandrews99](https://github.com/kandrews99)

