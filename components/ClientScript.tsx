import { ReactNode } from "react";

export type ClientScriptProps = {
  fn: Function,
  args?: string[],
}

export default function ClientScript(props: ClientScriptProps): ReactNode {
  return (
    <script children={`function __name(arg){return arg};(${props.fn})(${props.args?.join(", ") ?? ""})`} />
  )
}
