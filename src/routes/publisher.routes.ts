/**
 * @swagger
 * tags:
 *   name: Publisher
 *   description: The publishers managing API
 */

import express from "express";
import multer from "multer";
import { publisherService } from "../domain/services/publisher.service";
import { checkParams } from "../middlewares/checkParams.middleware";

const upload = multer({ dest: "public" });

export const publisherRouter = express.Router();
publisherRouter.get("/", checkParams, publisherService.getAllPublishers);
publisherRouter.get("/:id", publisherService.getPublisherById);
publisherRouter.get("/name/:name", publisherService.getPublisherByName);
publisherRouter.post("/", publisherService.createPublisher);
publisherRouter.delete("/:id", publisherService.deletePublisher);
publisherRouter.delete("/:id", publisherService.deletePublisher);
publisherRouter.put("/:id", publisherService.updatePublisher);
publisherRouter.post("/logo-upload", upload.single("logo"), publisherService.updatePublisherLogo);

/**
 * @swagger
 * /publisher:
 *   get:
 *     summary: Lists all the publishers
 *     tags: [Publisher]
 *     responses:
 *       200:
 *         description: The list of the publishers
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Publisher'
 *                 pagination:
 *                   $ref: '#/components/schemas/Pagination'
 */

/**
 * @swagger
 * /publisher/{id}:
 *   get:
 *     summary: Get a publisher by ID
 *     tags: [Publisher]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The publisher ID
 *     responses:
 *       200:
 *         description: The publisher info
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Publisher'
 */

/**
 * @swagger
 * /publisher/name/{name}:
 *   get:
 *     summary: Get a publisher by name
 *     tags: [Publisher]
 *     parameters:
 *       - in: path
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: The publisher name
 *     responses:
 *       200:
 *         description: The publisher info
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Publisher'
 *       404:
 *         description: The publisher was not found
 */

/**
 * @swagger
 * /publisher:
 *   post:
 *     summary: Create a new publisher
 *     tags: [Publisher]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Publisher'
 *     responses:
 *       201:
 *         description: The publisher was created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Publisher'
 *       400:
 *         description: The request body is incorrect or missing
 */

/**
 * @swagger
 * /publisher/{id}:
 *   delete:
 *     summary: Deletes a publisher
 *     tags: [Publisher]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The publisher ID
 *     responses:
 *       200:
 *         description: The publisher was deleted successfully
 *       404:
 *         description: The publisher was not found
 */

/**
 * @swagger
 * /publisher/{id}:
 *   put:
 *     summary: Update a publisher
 *     tags: [Publisher]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The publisher ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Publisher'
 *     responses:
 *       200:
 *         description: The publisher was updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Publisher'
 *       400:
 *         description: The request body is incorrect or missing
 *       404:
 *         description: The publisher was not found
 */

/**
 * @swagger
 * /publisher/logo-upload:
 *   post:
 *     summary: Upload a logo for a publisher
 *     tags: [Publisher]
 *     consumes:
 *       - multipart/form-data
 *     parameters:
 *       - in: formData
 *         name: logo
 *         type: file
 *         description: The file to upload.
 *       - in: formData
 *         name: publisherId
 *         type: string
 *         description: The id of the publisher
 *     responses:
 *       200:
 *         description: The logo was uploaded successfully
 *       404:
 *         description: The publisher was not found
 */
