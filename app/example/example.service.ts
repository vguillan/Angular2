
export class ExampleService{
  getExample():string{
    return 'Example Service'
  }
}

export class ExampleMockFakeService extends ExampleService{
  getExample():string{
    return 'Example Mock Fake Service'
  }
}
