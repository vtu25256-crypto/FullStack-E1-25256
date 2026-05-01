const Joi = require('joi');

const contactSchema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    message: Joi.string().max(500).required()
});

exports.submitForm = async (req, res, next) => {
    try {
        // 1. Validation
        const { error, value } = contactSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ status: 'error', message: error.details[0].message });
        }

        // 2. Business Logic (e.g., save to DB or send email)
        console.log('New Contact Submission:', value);

        // 3. Success Response
        res.status(201).json({
            status: 'success',
            message: 'Thank you for your message. We will get back to you soon.'
        });
    } catch (err) {
        next(err);
    }
};
