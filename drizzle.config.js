/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://neondb_owner:npg_0kws7qdQaSif@ep-shrill-shape-a4wqs1oc-pooler.us-east-1.aws.neon.tech/mockInterview?sslmode=require'
,
    }
};