let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Борщ', likesCount: 14},
            {id: 2, message: 'Гороховый суп', likesCount: 12},
            {id: 3, message: 'Суп из 7 залуп', likesCount: 123},
        ],
    },
    dialogsPage: {
        messages: [
            {id: 1, name: "Hello World!"},
            {id: 2, name: "Hi"},
            {id: 3, name: "Blyaa"},
        ],
        dialogs:
            [
                {id: 1, name: "Dimich"},
                {id: 2, name: "Sveta"},
                {id: 3, name: "Sasha"},
                {id: 4, name: "Viktor"},
                {id: 5, name: "Valera"},
                {id: 6, name: "Katya"},
                {id: 7, name: "Andrey"},
                {id: 8, name: "Masha"},
                {id: 9, name: "Igor"},
                {id: 10, name: "Nina"},
            ],
    },
    sidebar: {
        friends:
            [
                {id: 1, name: "Dimich"},
                {id: 2, name: "Sveta"},
                {id: 3, name: "Nina"},
                {id: 3, name: "Suka"},
                {id: 3, name: "Mraz"},
                {id: 3, name: "Pidor"},
                {id: 3, name: "Gleb"},
                {id: 3, name: "Vitya"},
            ],
    }
}

export default state;