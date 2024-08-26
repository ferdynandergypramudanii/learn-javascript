const requestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Error: connection timeout');
        } else {
            success(`Success: ${url} (${delay}ms)`);
        }
    }, delay);
};


requestCallback(
    'movie.com',
    function (response) {
    console.log('success', response);
    }, function (error) {
    console.log('error', error);
    }
);