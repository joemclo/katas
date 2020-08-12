class Greeter {
    greet(name) {
        name = name.trim();
        name = capitaliseName(name);

        const greetingMessage = getGreetingMessage();

        return `${greetingMessage} ${name}`;
    }
}

const capitaliseName = (name) => {
    const nameArray = name.split('');
    nameArray[0] = nameArray[0].toUpperCase();

    return nameArray.join('');
};

const getGreetingMessage = () => {
    const currentDate = Date.now();
    const currentHour = currentDate.getHours();

    if (currentHour >= 6 && currentHour < 12) {
        return 'Good morning';
    } else if (currentHour >= 18 && currentHour < 22) {
        return 'Good evening';
    } else if (currentHour >= 22 || currentHour < 6) {
        return 'Good night';
    } else {
        return 'Hello';
    }
};

export { Greeter };
