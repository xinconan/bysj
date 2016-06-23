/**
 * Created by XINCONAN on 2016/6/20.
 */
module.exports = {
    compare: function (left, operator, right, options) {
        /*jshint eqeqeq: false*/
        if (arguments.length < 3) {
            throw new Error('Handlerbars Helper "compare" needs 2 parameters');
        }

        if (options === undefined) {
            options = right;
            right = operator;
            operator = '===';
        }

        var operators = {
            '==': function (l, r) {
                return l == r;
            },
            '===': function (l, r) {
                return l === r;
            },
            '!=': function (l, r) {
                return l != r;
            },
            '!==': function (l, r) {
                return l !== r;
            },
            '<': function (l, r) {
                return l < r;
            },
            '>': function (l, r) {
                return l > r;
            },
            '<=': function (l, r) {
                return l <= r;
            },
            '>=': function (l, r) {
                return l >= r;
            },
            'typeof': function (l, r) {
                return typeof l == r;
            }
        };

        if (!operators[operator]) {
            throw new Error('Handlerbars Helper "compare" doesn\'t know the operator ' + operator);
        }

        var result = operators[operator](left, right);
        if (result) {
            return options.fn(this);
        } else {
            return options.inverse(this);
        }
    }
}