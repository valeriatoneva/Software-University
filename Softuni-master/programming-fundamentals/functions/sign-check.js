function solve(...nums) {

    recursiveSign(nums);
    function recursiveSign(nums, sign = 'Positive') {
        if (nums.length === 0 ) {
            console.log(sign);
            return;
        }

        let num = nums.pop();

        if (num === 0 ) {
            console.log('Positive');
            return;
        }
        
        if ((sign === 'Positive' && num > 0) || (sign === 'Negative' && num < 0)) {
            recursiveSign(nums, 'Positive');
        } else {
            recursiveSign(nums, 'Negative');
        }
    }

}
solve(5, 12, -15)