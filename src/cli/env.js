const parseEnv = () => {
    let result = '';
    const prefix = 'RSS_';
    const envVariables = process.env;

    const filteredEnvVariables = Object.entries(envVariables).filter(el => el[0].startsWith(prefix));
    filteredEnvVariables.forEach(el => result += `${el[0]}=${el[1]}; `);
    console.log(result.slice(0,-2));
};

parseEnv();