const parseArgs = () => {
    let result = '';
    const envArguments = process.argv.slice(2);

    for (let i = 0; i < envArguments.length - 1; i += 2) {
        result += `${envArguments[i]} is ${envArguments[i+1]}, `;
    }
    console.log(result.slice(0,-2));
};

parseArgs();