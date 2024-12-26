const mongoose = require('mongoose');

const userDetailsSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  highest_weight: {
    type: Number,
    required: true
  },
  training_years: {
    type: Number,
    required: true
  },
  training_frequency: {
    type: String,
    required: true
  },
  preferred_training_location: {
    type: String,
    required: true
  },
  home_equipment: {
    type: [String],
    default: []
  },
  desired_equipment: {
    type: [String],
    default: []
  },
  strength_training_description: {
    type: String
  },
  favorite_cardio: {
    type: [String],
    default: []
  },
  preferred_focus_areas: {
    type: [String],
    default: []
  },
  injuries: {
    type: [String],
    default: []
  },
  favorite_foods: {
    type: [String],
    default: []
  },
  disliked_foods: {
    type: [String],
    default: []
  },
  food_tracking_method: {
    type: String
  },
  past_diets: {
    type: [String],
    default: []
  },
  current_cardio_routine: {
    type: String
  },
  daily_nutrition: {
    type: String
  },
  weekend_nutrition: {
    type: String
  },
  favorite_recipes: {
    type: [String],
    default: []
  },
  alcohol_consumption: {
    type: String
  },
  medications: {
    type: [String],
    default: []
  },
  sleep_hours: {
    type: Number
  },
  current_job: {
    type: String
  },
  activity_level: {
    type: String
  },
  sports_participation: {
    type: [String],
    default: []
  },
  mirror_reflection: {
    type: String
  },
  long_term_goals: {
    type: String
  },
  motivation_level: {
    type: String
  },
  commitment_declaration: {
    type: String
  },
  additional_notes: {
    type: String
  },
  health_declaration: {
    type: String,
    required: true
  },
  signature: {
    type: String,
    required: true
  },
  terms_accepted: {
    type: Boolean,
    required: true
  },
  mailing_accepted: {
    type: Boolean,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('UserDetail', userDetailsSchema);
