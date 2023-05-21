# drawSolution

绘制解决方案

```http
POST /drawSolution
request body: DrawSolutionParams
```

```typescript
interface PositionRect {
  width: number
  height: number
  x: number
  y: number
  colorData: {
    bgColor: string
    borderColor: string
  }
  depth: number
  type: number
}

export interface DrawSolutionParams {
  target: { width: number; height: number }
  solution: PositionRect[]
  fontSize?: number
  fontScale?: number
  fontColor?: string
}
```

example:

```bash
curl http://localhost:3000/drawSolution -H "Content-Type:application/json" -X POST -d '{"target":{"height":10,"width":8},"solution":[{"colorData":{"bgColor":"#fef5ce","borderColor":"#ffeb94"},"depth":3,"height":5,"type":1,"width":4,"x":0,"y":0},{"colorData":{"bgColor":"#fef5ce","borderColor":"#ffeb94"},"depth":3,"height":5,"type":1,"width":4,"x":4,"y":0},{"colorData":{"bgColor":"#fef5ce","borderColor":"#ffeb94"},"depth":3,"height":5,"type":1,"width":4,"x":0,"y":5},{"colorData":{"bgColor":"#fef5ce","borderColor":"#ffeb94"},"depth":3,"height":5,"type":1,"width":4,"x":4,"y":5}]}'
```

response:
```json
{"image":"data:image/png;base64,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"}
```