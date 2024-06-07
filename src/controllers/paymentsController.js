import Payments from '../models/paymentsModel';

const get = async (req, res) => {
  try {
    const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;

    if (!id) {
      const response = await Payments.findAll();
      return res.status(200).send({
        message: 'Dados Encontrados',
        response,
      });
    }

    const response = await Payments.findOne({
      where: {
        id,
      },
    });
    return res.status(200).send({
      message: 'Dados Encontrados',
      response,
    });
  } catch (error) {
    return res.status(500).send({
      message: 'Ops',
      response: error.message,
    });
  }
};

const create = async (req, res) => {
  try {
    const {
      name,
    } = req.body;

    const response = await Payments.create(
      {
        name,
      },
    );
    return res.status(200).send({
      message: 'Dados Criados',
      response,
    });
  } catch (error) {
    return res.status(500).send({
      message: 'Ops',
      response: error.message,
    });
  }
};

const update = async (req, res) => {
  try {
    const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;

    if (!id) {
      return res.status(200).send({
        message: 'Id não informado',
        response: [],
      });
    }

    const response = await Payments.findOne({
      where: {
        id,
      },
    });

    if (!response) {
      return res.status(404).send({
        message: 'Id não encontrado',
        response: [],
      });
    }

    Object.keys(req.body).forEach((chave) => {
      response[chave] = req.body[chave];
    });

    await response.save();
    return res.status(201).send({
      message: 'Dados Atualizados',
      response,
    });
  } catch (error) {
    return res.status(500).send({
      message: 'Ops',
      response: error.message,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;

    if (!id) {
      return res.status(200).send({
        message: 'Id não informado',
        response: [],
      });
    }

    const response = await Payments.findOne({
      where: {
        id,
      },
    });

    if (!response) {
      return res.status(404).send({
        message: 'Id não encontrado',
        response: [],
      });
    }
    await response.destroy();
    return res.status(200).send({
      message: 'Dados Destruidos',
      response,
    });
  } catch (error) {
    return res.status(500).send({
      message: 'Ops',
      response: error.message,
    });
  }
};

export default {
  get,
  create,
  update,
  destroy,
};
