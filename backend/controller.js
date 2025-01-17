const handlePost = (req, res) => {
    const data = req.body.data;
    const userId = "john_doe_17091999";
    const email = "john@xyz.com";
    const rollNumber = "ABCD123";

    let numbers = [];
    let alphabets = [];
    let highestAlphabet = [];

    if (data && Array.isArray(data)) {
        data.forEach(item => {
            if (!isNaN(item)) {
                numbers.push(item);
            } else if (typeof item === 'string' && item.length === 1) {
                alphabets.push(item);
            }
        });

        if (alphabets.length > 0) {
            highestAlphabet.push(alphabets.reduce((a, b) => (a.toLowerCase() > b.toLowerCase() ? a : b)));
        }
    }

    res.json({
        is_success: true,
        user_id: userId,
        email: email,
        roll_number: rollNumber,
        numbers: numbers,
        alphabets: alphabets,
        highest_alphabet: highestAlphabet
    });
};

const handleGet = (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
};

module.exports = {
    handlePost,
    handleGet
};
