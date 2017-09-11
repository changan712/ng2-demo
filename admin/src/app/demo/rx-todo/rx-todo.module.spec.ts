import { RxTodoModule } from './rx-todo.module';

describe('RxTodoModule', () => {
  let rxTodoModule: RxTodoModule;

  beforeEach(() => {
    rxTodoModule = new RxTodoModule();
  });

  it('should create an instance', () => {
    expect(rxTodoModule).toBeTruthy();
  });
});
