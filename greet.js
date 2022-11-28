// greet function //
export default function greet(name) {

    if (name === null || name === undefined)
    return 'Good morning!';
    if (typeof name === typeof []) {
        if (name.length > 0) {
            let names = '';
            name.forEach((element) => {
                names += ', ' + element;
            });
            return 'Good morning' + names;
        }
        return 'Good morning!';
    }
    if (name === name.toUpperCase()) {
        return 'GOOD MORNING ' + name + '!';
    }

    return 'Good morning, ' + name;
}