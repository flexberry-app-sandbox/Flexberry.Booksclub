docker build --no-cache -f SQL\Dockerfile.PostgreSql -t booksclub/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t booksclub/app ../..
