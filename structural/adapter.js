// Adapter is a structural design pattern
// External service class (expects data as an array)
class DataService {
  getData() {
    return [100, 200, 300]; // Array format
  }
}

// Your application expects data as an object
class DataProcessor {
  process(data) {
    console.log(
      `Processing data: ${data.first}, ${data.second}, ${data.third}`
    );
  }
}

// Adapter to translate array format to object format
class DataAdapter {
  constructor(dataService) {
    this.dataService = dataService;
  }

  getData() {
    const dataArray = this.dataService.getData();
    // Translate array format to object format
    return {
      first: dataArray[0],
      second: dataArray[1],
      third: dataArray[2],
    };
  }
}

// Usage
const dataService = new DataService();
const dataAdapter = new DataAdapter(dataService);
const dataProcessor = new DataProcessor();

// Now the DataProcessor can work with the adapted data
dataProcessor.process(dataAdapter.getData());
