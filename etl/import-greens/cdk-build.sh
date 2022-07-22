
set -eux

cp -r import_greens/* /asset-output
pip install -r requirements.txt --target /asset-output
