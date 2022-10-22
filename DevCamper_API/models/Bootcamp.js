const mongoose = require("mongoose");
const slugify = require("slugify");
const BootcampSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please add a name"],
    unique: true,
    trim: true,
    maxlength: [50, "Name cannot be more than 50 characters "],
  },
  slug: String,
  description: {
    type: String,
    require: [true, "Please add a name"],
    maxlength: [500, "Name cannot be more than 50 characters "],
  },
  website: {
    type: String,
    match: [
      /https?:\/\/(www\.)?[-a-zA-Z09@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
      "Please use a valid URL with HTTP or HTTPS",
    ],
  },
  email: {
    type: String,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
  },
  phone: {
    type: String,
    maxlength: [20, "Phone number cannot be longer than 20 characters"],
  },
  address: {
    type: String,
    required: [true, "Please add an address"],
  },
  //   location: {
  //     // GeoJSON Point
  //     type: {
  //       type: String,
  //       enum: ["Point"],
  //       required: true,
  //     },
  //     coordinates: {
  //       type: [Number],
  //       required: true,
  //       index: "2dsphere",
  //     },
  //     formattedAddress: String,
  //     street: String,
  //     city: String,
  //     state: String,
  //     zipcode: String,
  //     country: String,
  //   },
  careers: {
    type: [String],
    require: true,
    enum: [
      "Web Development",
      "Mobile Development",
      "UI/UX",
      "Data Science",
      "Business",
      "Other",
    ],
  },
  averageRating: {
    type: Number,
    min: [1, "Rating must be at least 1"],
    max: [10, "Rating cannot be more than 10"],
  },
  averageCost: Number,
  photo: {
    type: String,
    default: "no-photo.jpg",
  },
  housing: {
    type: Boolean,
    default: false,
  },
  jobAssistance: {
    type: Boolean,
    defualt: false,
  },
  jobGuarantee: {
    type: Boolean,
    defualt: false,
  },
  acceptGi: {
    type: Boolean,
    defualt: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create bootcamp slug from the name
BootcampSchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

module.exports = mongoose.model("Bootcamp", BootcampSchema);
