import winston from 'winston';

const Logger: winston.Logger = winston.createLogger({
  transports: [
    //
    // - Write all logs with level `error` and below to `error.log`
    // - Write all logs with level `info` and below to `combined.log`
    //
    new winston.transports.File({
      filename: 'logs/error.log',
      level: 'error',
      maxsize: 5242880,
      format: winston.format.combine(
        winston.format.timestamp({
          format: 'HH:MM:SS DD/MM/YYYY'
        }),
        winston.format.prettyPrint()
      )
    }),
    new winston.transports.File({
      filename: 'logs/combined.log',
      maxsize: 5242880,
      format: winston.format.combine(
        winston.format.timestamp({
          format: 'HH:MM:SS DD/MM/YYYY'
        }),
        winston.format.prettyPrint()
      )
    })
  ]
  // format: winston.format.combine(
  //   winston.format.colorize({ all: true }),
  //   winston.format.simple()
  // ),
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV === 'development') {
  Logger.add(
    new winston.transports.Console({
      format: winston.format.combine(winston.format.colorize({ all: true }), winston.format.simple())
    })
  );
}

export default Logger;
