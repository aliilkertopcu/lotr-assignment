// characterController.js
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
// Handle index actions

User = require("../models/user.model");
const environment = require("../config/environment");
const axios = require('axios').default;

const instance = axios.create({
  baseURL: process.env.THE_ONE_API_URL,
  timeout: 1000,
  headers: { Authorization: `Bearer ${process.env.THE_ONE_API_KEY}` }
});

exports.index = function (req, res) {
  let params = new URLSearchParams();

  const filters = JSON.parse(req.query.filters);

  if (req.headers && req.headers.authorization) {
    var authorization = req.headers.authorization.split(' ')[1],
      decoded;

    try {
      decoded = jwt.verify(authorization, environment.secret)
    } catch (err) {
      return res.status(401).json({
        status: "error",
        error: "You are not authorized!"
      })
    }

    User.findById({ _id: decoded.sub }).then(function (user) {
      if (filters.limit > user.maxLimit) {
        return res.status(401).json({
          status: "error",
          error: "Gotcha! You are not authorized for querying " + filters.limit + " characters."
        })
      }
      for (var prop in filters) {
        if (Object.prototype.hasOwnProperty.call(filters, prop)) {
          if (filters[prop]) {
            params.append(prop, filters[prop]);
          }
        }
      }

      instance.get('/character', { params: params })
        .then(function (responseData) {
          res.json({
            status: "success",
            message: "Characters retrieved successfully",
            data: responseData.data
          });
        }).catch(function (error) {
          console.log(error);
          res.status(error.response.status).json({
            status: error.response.statusText,
            error: error.response.data
          });
        });
    });
  }
}
