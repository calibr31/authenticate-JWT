/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 * /api/user/signup:
 *   post:
 *     summary: signup operation
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: ali123
 *               email:
 *                 type: string
 *                 example: ali@example.com
 *               password:
 *                 type: string
 *                 example: secret123
 *               age:
 *                 type: integer
 *                 example: 25
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: ali123
 *               email:
 *                 type: string
 *                 example: ali@example.com
 *               password:
 *                 type: string
 *                 example: secret123
 *               age:
 *                 type: integer
 *                 example: 25
 *     responses:
 *       201:
 *         description: created success
 *       409:
 *         description: user exists
 *       400:
 *         description: bad request (validation error)
 * 
 * /api/user/login:
 *   post:
 *     summary: login operation
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: ali@example.com
 *               password:
 *                 type: string
 *                 example: secret123
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: ali@example.com
 *               password:
 *                 type: string
 *                 example: secret123
 *     responses:
 *       200:
 *         description: login success
 *         headers:
 *           Set-Cookie:
 *             description: Refresh token set in httpOnly cookie
 *             schema:
 *               type: string
 *       401:
 *         description: email or password incorrect
 *       400:
 *         description: bad request (validation error)
 * /api/user/profile:
 *   get:
 *     summary: load user profile
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: success get profile
 *       401:
 *         description: unauthorized(token)
 * /api/user/newtoken:
 *   get:
 *     summary: generate new accesstoken with refreshtoken 
 *     responses:
 *       200:
 *         description: success get profile
 *       401:
 *         description: unauthorized(token)
  * /api/user/logout:
 *   get:
 *     summary: logout(cleare cookie) 
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: success get profile
 *       401:
 *         description: unauthorized(token)
 */
