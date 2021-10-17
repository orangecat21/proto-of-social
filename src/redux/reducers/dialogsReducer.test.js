const dialogsReducer = require("./dialogsReducer")
// @ponicode
describe("dialogsReducer.sendMessageActionCreator", () => {
    test("0", () => {
        let callFunction = () => {
            dialogsReducer.sendMessageActionCreator()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("dialogsReducer.updateNewMessageTextActionCreator", () => {
    test("0", () => {
        let callFunction = () => {
            dialogsReducer.updateNewMessageTextActionCreator("Hello, world!")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            dialogsReducer.updateNewMessageTextActionCreator("foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            dialogsReducer.updateNewMessageTextActionCreator("Foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            dialogsReducer.updateNewMessageTextActionCreator("This is a Text")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            dialogsReducer.updateNewMessageTextActionCreator(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
