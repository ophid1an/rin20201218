const persons = [
    {
        id: 3,
        name: "John",
        yearOfBirth: 1980,
    },
    {
        id: 5,
        name: "Helen",
        yearOfBirth: 1999,
    },
    {
        id: 6,
        name: "Mary",
        yearOfBirth: 2000,
    },
    {
        id: 8,
        name: "Alex",
        yearOfBirth: 1997,
    },
    {
        id: 12,
        name: "Nick",
        yearOfBirth: 1985,
    },
];

export const fetchPersons = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                resolve({ persons });
            } else {
                reject({ error: "Network error" });
            }
        }, 2000);
    });
};
