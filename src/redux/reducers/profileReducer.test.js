import profileReducer, {addPostActionCreator} from "./profileReducer";

it('lenght of posts should be incremneted', () => {
    // 1. test data
    let state = {
        postData: [
            {
                message: "Hello everybody",
                id: 1,
            },
            {
                message: "Shut up, chicken",
                id: 2,
            },
            {
                message: "My name is...",
                id: 3,
            },
        ],
        newPostText: "Kirill",
    };
    let action = addPostActionCreator();

    // 2. action
    let newState = profileReducer(state, action);

    // 3. Expectation
    expect(newState.postData.length).toBe(4);
    expect(newState.postData[3].message).toBe(state.newPostText);
});
