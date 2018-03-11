const data = [10,34,86, 12, 65];
const chart = d3.select('.chart');

const plotData = (data) => {
  console.log(data);
  chart.selectAll('div')
      .data(data)
      .enter()
      .append('div')
      .style('width', d => `${d[1]/100}%`)      
      .text(d => d[0])
      .on("mouseover", (d) => {
        console.log(d);
      })
      .on("mouseout", () => {
        console.log('outside');
      });
}

const getGDPData = () => {
  return fetch('https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json')
    .then(response => {
      return response.json();
    });
};

const fetchData = async () => {
  try {
    const response = await getGDPData();
    console.log(response);
    plotData(response.data);
  } catch (e) {
    console.error(e);
  }
}

fetchData();