import * as actions from '../actions/index';
import { types }from '../actions/index';

describe('actions', () => {
    it('should create an action and check if action named clearArray is being called', () => {
       const result = actions.emptyDetail();
        expect(result.type).toEqual(types.EMPTY_DETAIL);
    });
})