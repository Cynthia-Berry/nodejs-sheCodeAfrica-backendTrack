const express = require('express');
const router = express.Router();

const User = require('./dummy.data')
const logger = require('./logger');

router.get("/", (req, res) => {
	try {
		logger.info('Successfully fetched all user');
		res.status(200).json({data: User, status: 'SUCCESS', message: 'Successfully fetched all user'});
	} catch (error) {
		logger.error('Failed to get users');
		res.status(400).json({status: 'FAILED', message: 'An error occurred while fetched all user'})
	}
});

router.get("/:id", async (req, res) => {
	try {
		const userById = await User.find(user => user.id === req.params.id);
		
		if (userById) {
			logger.info('Successfully fetched user');
			res.status(200).json({data: userById, status: 'SUCCESS', message: 'Successfully fetched all user'});
		} else {
			logger.warn('User does not exist');
			res.status(200).json({data: [], status: 'SUCCESS', message: 'User not found or does not exist'});
		}
	} catch (error) {
		logger.error('Failed to get users');
		res.status(400).json({status: 'FAILED', message: 'An error occurred while fetched all user'})
	}
})

module.exports = router;