/**
 * @swagger
 * tags:
 *   name: User
 *   description: User management and details
 */
const userDocs = {
  paths: {
    "/upsertUserDetails": {
      post: {
        tags: ["User"],
        summary: "Create or update user details",
        description: "Create or update detailed user profile information",
        security: [{ bearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: [
                  "user_id",
                  "phone",
                  "age", 
                  "height",
                  "weight",
                  "highest_weight",
                  "training_years",
                  "training_frequency",
                  "preferred_training_location",
                  "health_declaration",
                  "signature",
                  "terms_accepted",
                  "mailing_accepted"
                ],
                properties: {
                  user_id: {
                    type: "string",
                    description: "User's MongoDB ObjectId",
                    example: "507f1f77bcf86cd799439011"
                  },
                  phone: {
                    type: "string", 
                    description: "User's phone number",
                    example: "+1234567890"
                  },
                  age: {
                    type: "number",
                    description: "User's age",
                    example: 30
                  },
                  height: {
                    type: "number",
                    description: "User's height",
                    example: 175
                  },
                  weight: {
                    type: "number",
                    description: "User's current weight",
                    example: 70
                  },
                  highest_weight: {
                    type: "number",
                    description: "User's highest weight",
                    example: 75
                  },
                  training_years: {
                    type: "number",
                    description: "Years of training experience",
                    example: 5
                  },
                  training_frequency: {
                    type: "string",
                    description: "How often user trains",
                    example: "3 times per week"
                  },
                  preferred_training_location: {
                    type: "string",
                    description: "Preferred location for training",
                    example: "Gym"
                  },
                  home_equipment: {
                    type: "array",
                    items: {
                      type: "string"
                    },
                    description: "List of equipment available at home",
                    example: ["Dumbbells", "Resistance bands"]
                  },
                  desired_equipment: {
                    type: "array",
                    items: {
                      type: "string"
                    },
                    description: "List of desired equipment",
                    example: ["Power rack", "Barbell"]
                  },
                  strength_training_description: {
                    type: "string",
                    description: "Description of strength training experience",
                    example: "Intermediate level, focused on compound movements"
                  },
                  favorite_cardio: {
                    type: "array",
                    items: {
                      type: "string"
                    },
                    description: "List of favorite cardio activities",
                    example: ["Running", "Swimming"]
                  },
                  preferred_focus_areas: {
                    type: "array",
                    items: {
                      type: "string"
                    },
                    description: "Areas user wants to focus on",
                    example: ["Upper body", "Core"]
                  },
                  injuries: {
                    type: "array",
                    items: {
                      type: "string"
                    },
                    description: "List of injuries",
                    example: ["Previous knee injury"]
                  },
                  sleep_hours: {
                    type: "number",
                    description: "Average hours of sleep",
                    example: 7
                  },
                  current_job: {
                    type: "string",
                    description: "Current occupation",
                    example: "Office worker"
                  },
                  activity_level: {
                    type: "string",
                    description: "General activity level",
                    example: "Moderately active"
                  },
                  sports_participation: {
                    type: "array",
                    items: {
                      type: "string"
                    },
                    description: "Sports user participates in",
                    example: ["Basketball", "Tennis"]
                  },
                  mirror_reflection: {
                    type: "string",
                    description: "User's perception of their reflection",
                    example: "Looking to improve overall fitness"
                  },
                  long_term_goals: {
                    type: "string",
                    description: "Long term fitness goals",
                    example: "Build muscle and improve endurance"
                  },
                  motivation_level: {
                    type: "string",
                    description: "Level of motivation",
                    example: "High"
                  },
                  commitment_declaration: {
                    type: "string",
                    description: "Declaration of commitment",
                    example: "Fully committed to achieving fitness goals"
                  },
                  additional_notes: {
                    type: "string",
                    description: "Any additional information",
                    example: "Prefer morning workouts"
                  },
                  health_declaration: {
                    type: "string",
                    description: "Health declaration statement",
                    example: "No current health issues"
                  },
                  signature: {
                    type: "string",
                    description: "User's signature",
                    example: "John Doe"
                  },
                  terms_accepted: {
                    type: "boolean",
                    description: "Whether terms were accepted",
                    example: true
                  },
                  mailing_accepted: {
                    type: "boolean",
                    description: "Whether mailing was accepted",
                    example: true
                  }
                }
              }
            }
          }
        },
        responses: {
          200: {
            description: "User details successfully created or updated",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    success: {
                      type: "boolean",
                      example: true
                    },
                    data: {
                      type: "object",
                      //want to add the user details here   
                        example: {
                        user_id: "507f1f77bcf86cd799439011",
                        phone: "+1234567890",
                        age: 30,
                        height: 175,
                        weight: 70,
                        highest_weight: 75,
                        training_years: 5,
                        training_frequency: "3 times per week",
                        preferred_training_location: "Gym"
                      }
                    }
                  }
                }
              }
            }
          },
          400: {
            description: "Bad request",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    success: {
                      type: "boolean",
                      example: false
                    },
                    error: {
                      type: "string",
                      example: "Invalid input data"
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

module.exports = userDocs;
