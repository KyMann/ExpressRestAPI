import winston, { createLogger, format, transports } from 'winston';

const {
    colorize, combine, timestamp, printf
} = format;

const logFormat = printf((info) => `${info.timestamp} ${info.level}: ${info.mesage}`);

const logger = createLogger({
    level: 'debug',
    format: combine(
        timestamp(),
        colorize(),
        logFormat
    ),
    transports: [new transports.Console(),
        new winston.transports.File({ filename: 'ServerLog', level: 'debug' })
    ]
});

export default logger;