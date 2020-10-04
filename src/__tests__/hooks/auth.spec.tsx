import { renderHook } from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';
import qs from 'querystring';
import { AuthProvider, useAuth } from '../../hooks/auth';
import api from '../../services/api';

const apiMock = new MockAdapter(api);

describe('Auth hook', () => {
  it('should be able to sign in', async () => {
    const apiGetTokenResponse = {
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbF91dGlsaXphZG9yIjoidG9tYXNAbWFpbC5jb20iLCJpZF91dGlsaXphZG9yIjo1NiwiaWF0IjoxNjAxNzYwNDk1LCJleHAiOjE2MDE4NDY4OTV9.GbW0dbg6Trmbd28J_bK_eBDTDTGCq7EGfqYiLuXVPl0',
    };

    apiMock
      .onGet('token/sign/johndoe@example.com/2')
      .reply(200, apiGetTokenResponse);

    const apiGetUtilizadorLoginResponse = [
      {
        id_utilizador: 56,
        nome_utilizador: 'Tomas',
        email_utilizador: 'tomas@gmail.com',
        telemovel_utilizador: 91234567,
        password_utilizador:
          '$2b$10$VIRTzgTzWizNboDTRz4F7u.ID5gjZyhhw4wVV8vv0okECVP2hZvPm',
        fk_tipo_utilizador: 2,
      },
    ];

    apiMock
      .onGet('utilizador-login/johndoe@example.com')
      .reply(200, apiGetUtilizadorLoginResponse);

    const apiPostUtilizadorCheck = true;

    apiMock
      .onPost('utilizador-check/johndoe@example.com/1234567', {
        hash: 'asdasdsad',
      })
      .reply(200, apiPostUtilizadorCheck);

    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');

    const { result, waitForNextUpdate } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    result.current.signIn({
      email: 'johndoe@example.com',
      password: '123456',
    });

    await waitForNextUpdate();

    expect(setItemSpy).toHaveBeenCalledWith(
      '@RegistoOcorrencias:token',
      apiGetTokenResponse,
    );
  });
});
