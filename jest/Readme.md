# JEST

## Matchers: 

- toBe()
- toBeCloseTo()
- toEqual()
- toBeNull()
- toBeUndefined()
- toBeFalsy()
- toBeDefined()
- toBeTruthy()
- toBeGreaterThan()
- toBeGreaterThanOrEqual()
- toBeLessThan()
- toBeLessThanOrEqual()
- toMatch()
- toContain()
- toThrow()
- toHaveLength()

## Hooks:

- beforeEach()
- afterEach()
- beforeAll()
- afterAll()

## Additional:

- test() - block
- describe() - block
- test.only()

## Mock Functions

- myMock = jest.fn()
- .mock
- .mock.calls[][] / [] - (the call), [] - (the arg (1st/2nd ...))
- .mock.instances
- .mock.results[].value
- .mock.contexts
- .mock.lastCall[]
- .mockReturnValue()
- .mockReturnValueOnce()
- .mockImplementation()
- .mockImplementationOnce()
- .mockReturnThis()
- .mockName()

## Custom Matchers :

- .toHaveBeenCalled()
- .toHaveBeenCalledWith()
- .toHaveBeenLastCalledWith()
- .toMatchSnapshot()
- .toContainEqual()
- .getMockName()