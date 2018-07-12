import { CadastroPjModule } from './cadastro-pj.module';

describe('CadastroPjModule', () => {
  let cadastroPjModule: CadastroPjModule;

  beforeEach(() => {
    cadastroPjModule = new CadastroPjModule();
  });

  it('should create an instance', () => {
    expect(cadastroPjModule).toBeTruthy();
  });
});
