#!/usr/bin/env bash

set -euo pipefail

function usage {
  echo "Usage: $0 <env>" >&2
  exit 1
}

[[ $# -ge 1 ]] || usage
environment=$1
shift

echo "Deploying $SERVICE-$environment... " >&2
echo >&2

export NAMESPACE="$SERVICE-${environment}"

WEB_ANALYTICS_SRC_BASE64="$(echo -n "$WEB_ANALYTICS_SRC" | openssl base64 -A)"
WEB_ANALYTICS_ID_BASE64="$(echo -n "$WEB_ANALYTICS_ID" | openssl base64 -A)"
export WEB_ANALYTICS_SRC_BASE64 WEB_ANALYTICS_ID_BASE64

# shellcheck disable=SC2016
variables='
  $IMAGE
  $MANAGED_DOMAIN
  $NAMESPACE
  $SERVICE
  $VANITY_DOMAIN
  $WEB_ANALYTICS_ID_BASE64
  $WEB_ANALYTICS_SRC_BASE64
  '

envsubst "$variables" <kubernetes.yaml | kubectl apply -f -

echo >&2
echo 'Deployment complete' >&2
