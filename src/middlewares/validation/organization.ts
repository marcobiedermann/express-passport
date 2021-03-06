import { celebrate, Joi, Segments } from 'celebrate';

const limit = Joi.number().integer().min(0).max(100);
const page = Joi.number().integer().min(0);
const order = Joi.string().valid('ASC', 'DESC').uppercase();
const sort = Joi.string().valid('name').lowercase();

const id = Joi.string().guid({
  version: ['uuidv4'],
});
const name = Joi.string().trim();

const validateCreateOrganization = celebrate({
  [Segments.BODY]: Joi.object({
    name: name.required(),
  }),
});

const validateDeleteOrganization = celebrate({
  [Segments.PARAMS]: Joi.object({
    organizationId: id.required(),
  }),
});

const validateGetOrganization = celebrate({
  [Segments.PARAMS]: Joi.object({
    organizationId: id.required(),
  }),
});

const validateGetOrganizations = celebrate({
  [Segments.QUERY]: Joi.object({
    limit,
    page,
    order,
    sort,
  }).unknown(true),
});

const validateUpdateOrganization = celebrate({
  [Segments.PARAMS]: Joi.object({
    organizationId: id.required(),
  }),
  [Segments.BODY]: Joi.object({
    name,
  }),
});

export {
  validateCreateOrganization,
  validateDeleteOrganization,
  validateGetOrganization,
  validateGetOrganizations,
  validateUpdateOrganization,
};
