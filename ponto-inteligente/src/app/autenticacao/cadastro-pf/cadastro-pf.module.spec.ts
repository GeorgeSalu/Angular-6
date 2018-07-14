import { CadastroPfModule } from './cadastro-pf.module';

describe('CadastroPfModule', () => {
  let cadastroPfModule: CadastroPfModule;

  beforeEach(() => {
    cadastroPfModule = new CadastroPfModule();
  });

  it('should create an instance', () => {
    expect(cadastroPfModule).toBeTruthy();
  });
});
