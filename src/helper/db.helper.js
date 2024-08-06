// require others
const Pool = require('pg').Pool;

/**
 * Singleton class used to comunicate with data base
 *
 * @version 1.0
 * @author stewart (1.0)
 **/
class DataBaseHelper {
  constructor() {}

  init = () => {
    //private function to create methods and properties

    //Create a connection pool from data base

    let pool = null;
    let result = null;

    //DB Connection
    pool = new Pool({
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      port: process.env.DB_PORT,
      max: process.env.DB_MAX_POOL, // max number of clients in the pool
    });

    /**
     * User for Select insert, delete and updates in data base
     * result 1 - the query was succesfull
     */
    let query = async (sql) => {
      const client = await pool.connect();
      try {
        await client.query('BEGIN');
        let queryResult = await client.query(`${sql} RETURNING id, uuid`);
        result = queryResult.rows[0];
        await client.query('COMMIT');
      } catch (e) {
        await client.query('ROLLBACK');
        throw e;
      } finally {
        client.release(true);
      }
      return result;
    };
    let getPoolCoonect = async () => {
      return await pool.connect();
    };

    /**
     * User for Select querys in data base,
     */
    let select = async (sql) => {
      const client = await pool.connect();
      try {
        await client.query('BEGIN');
        result = await client.query(sql);
        await client.query('COMMIT');
      } catch (e) {
        await client.query('ROLLBACK');
        throw e;
      } finally {
        client.release(true);
      }
      return result.rows;
    };

    return {
      query: query,
      select: select,
      poolConect: getPoolCoonect,
    };
  };
}
module.exports = DataBaseHelper;
