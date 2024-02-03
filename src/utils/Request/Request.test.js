import { Request } from './Request';

describe('Request Utility Function', () => {
  global.fetch = jest.fn();

  beforeEach(() => {
    fetch.mockReset();
  });

  it('makes a successful API request', async() => {
    // Mock the fetch response
    const mockResponse = { data: 'Mocked Data' };
    fetch.mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    const url = 'https://not#a-site.com/not-found-endpoint';
    const options = { method: 'GET' };

    const result = await Request(url, options);

    expect(fetch).toHaveBeenCalledWith(url, {
      headers: { 'Content-Type': 'application/json' },
      method: 'GET',
    });

    expect(result).toEqual(mockResponse);
  });

  it('handles an unsuccessful API request', async() => {
    // Mock the fetch response
    fetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
      json: jest.fn().mockResolvedValueOnce({ error: 'Not Found' }),
    });

    const url = 'https://not#a-site.com/not-found-endpoint';
    const options = { method: 'GET' };

    await expect(Request(url, options)).rejects.toThrowError('HTTP error! Status: 404');

    expect(fetch).toHaveBeenCalledWith(url, {
      headers: { 'Content-Type': 'application/json' },
      method: 'GET',
    });
  });

  it('handles a network error during API request', async() => {
    // Mock the fetch response for a network error
    fetch.mockRejectedValueOnce(new Error('Network Error'));

    const url = 'https://not#a-site.com/not-found-endpoint';
    const options = { method: 'GET' };

    await expect(Request(url, options)).rejects.toThrowError('Network Error');

    expect(fetch).toHaveBeenCalledWith(url, {
      headers: { 'Content-Type': 'application/json' },
      method: 'GET',
    });
  });
});
