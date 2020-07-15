function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { MessageBuilder } from '../messaging/builder';
import { RequestErrors } from '@algosigner/common/types';
import { JsonRpcMethod } from '@algosigner/common/messaging/types';
import { Runtime } from '@algosigner/common/runtime/runtime';
export class Task extends Runtime {
  static get inPayloadSign() {
    return ['amount', 'to'];
  }

  connect() {
    return MessageBuilder.promise(JsonRpcMethod.Authorization, {});
  }

  accounts() {} // TODO needs json and raw payload support and complete argument support


  sign(params, error = RequestErrors.None) {
    if (!super.requiredArgs(Task.inPayloadSign, Object.keys(params))) {
      error = RequestErrors.InvalidTransactionParams;
    }

    return MessageBuilder.promise(JsonRpcMethod.SignTransaction, params, error);
  }

  query(method, params, error = RequestErrors.None) {
    let request = {
      method: method,
      params: params
    };
    return MessageBuilder.promise(JsonRpcMethod.Algod, request, error);
  }

  subscribe(eventName, callback) {
    Task.subscriptions[eventName] = callback;
  }

}

_defineProperty(Task, "subscriptions", {});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mbi90YXNrLnRzIl0sIm5hbWVzIjpbIk1lc3NhZ2VCdWlsZGVyIiwiUmVxdWVzdEVycm9ycyIsIkpzb25ScGNNZXRob2QiLCJSdW50aW1lIiwiVGFzayIsImluUGF5bG9hZFNpZ24iLCJjb25uZWN0IiwicHJvbWlzZSIsIkF1dGhvcml6YXRpb24iLCJhY2NvdW50cyIsInNpZ24iLCJwYXJhbXMiLCJlcnJvciIsIk5vbmUiLCJyZXF1aXJlZEFyZ3MiLCJPYmplY3QiLCJrZXlzIiwiSW52YWxpZFRyYW5zYWN0aW9uUGFyYW1zIiwiU2lnblRyYW5zYWN0aW9uIiwicXVlcnkiLCJtZXRob2QiLCJyZXF1ZXN0IiwiQWxnb2QiLCJzdWJzY3JpYmUiLCJldmVudE5hbWUiLCJjYWxsYmFjayIsInN1YnNjcmlwdGlvbnMiXSwibWFwcGluZ3MiOiI7O0FBRUEsU0FBUUEsY0FBUixRQUE2QixzQkFBN0I7QUFFQSxTQUFpQ0MsYUFBakMsUUFBcUQsMEJBQXJEO0FBQ0EsU0FBUUMsYUFBUixRQUF1RCxvQ0FBdkQ7QUFDQSxTQUFRQyxPQUFSLFFBQXNCLG9DQUF0QjtBQUVBLE9BQU8sTUFBTUMsSUFBTixTQUFtQkQsT0FBbkIsQ0FBNEM7QUFJL0MsYUFBV0UsYUFBWCxHQUEwQztBQUN0QyxXQUFPLENBQUMsUUFBRCxFQUFVLElBQVYsQ0FBUDtBQUNIOztBQUVEQyxFQUFBQSxPQUFPLEdBQXlCO0FBQzVCLFdBQU9OLGNBQWMsQ0FBQ08sT0FBZixDQUNITCxhQUFhLENBQUNNLGFBRFgsRUFFSCxFQUZHLENBQVA7QUFJSDs7QUFFREMsRUFBQUEsUUFBUSxHQUFFLENBQUUsQ0FmbUMsQ0FpQi9DOzs7QUFDQUMsRUFBQUEsSUFBSSxDQUNBQyxNQURBLEVBRUFDLEtBQW9CLEdBQUdYLGFBQWEsQ0FBQ1ksSUFGckMsRUFHb0I7QUFDcEIsUUFBRyxDQUFDLE1BQU1DLFlBQU4sQ0FBbUJWLElBQUksQ0FBQ0MsYUFBeEIsRUFBc0NVLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZTCxNQUFaLENBQXRDLENBQUosRUFBK0Q7QUFDM0RDLE1BQUFBLEtBQUssR0FBR1gsYUFBYSxDQUFDZ0Isd0JBQXRCO0FBQ0g7O0FBQ0QsV0FBT2pCLGNBQWMsQ0FBQ08sT0FBZixDQUNITCxhQUFhLENBQUNnQixlQURYLEVBRUhQLE1BRkcsRUFHSEMsS0FIRyxDQUFQO0FBS0g7O0FBRURPLEVBQUFBLEtBQUssQ0FDREMsTUFEQyxFQUVEVCxNQUZDLEVBR0RDLEtBQW9CLEdBQUdYLGFBQWEsQ0FBQ1ksSUFIcEMsRUFJa0I7QUFFbkIsUUFBSVEsT0FBb0IsR0FBRztBQUN2QkQsTUFBQUEsTUFBTSxFQUFFQSxNQURlO0FBRXZCVCxNQUFBQSxNQUFNLEVBQUVBO0FBRmUsS0FBM0I7QUFLQSxXQUFPWCxjQUFjLENBQUNPLE9BQWYsQ0FDSEwsYUFBYSxDQUFDb0IsS0FEWCxFQUVIRCxPQUZHLEVBR0hULEtBSEcsQ0FBUDtBQUtIOztBQUVEVyxFQUFBQSxTQUFTLENBQ0xDLFNBREssRUFFTEMsUUFGSyxFQUdQO0FBQ0VyQixJQUFBQSxJQUFJLENBQUNzQixhQUFMLENBQW1CRixTQUFuQixJQUFnQ0MsUUFBaEM7QUFDSDs7QUF2RDhDOztnQkFBdENyQixJLG1CQUV5QyxFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJVGFza30gZnJvbSAnLi9pbnRlcmZhY2VzJztcclxuXHJcbmltcG9ydCB7TWVzc2FnZUJ1aWxkZXJ9IGZyb20gJy4uL21lc3NhZ2luZy9idWlsZGVyJzsgXHJcblxyXG5pbXBvcnQge0FsZ29kUmVxdWVzdCxUcmFuc2FjdGlvbixSZXF1ZXN0RXJyb3JzfSBmcm9tICdAYWxnb3NpZ25lci9jb21tb24vdHlwZXMnO1xyXG5pbXBvcnQge0pzb25ScGNNZXRob2QsSnNvblBheWxvYWQsU3VwcG9ydGVkQWxnb2R9IGZyb20gJ0BhbGdvc2lnbmVyL2NvbW1vbi9tZXNzYWdpbmcvdHlwZXMnO1xyXG5pbXBvcnQge1J1bnRpbWV9IGZyb20gJ0BhbGdvc2lnbmVyL2NvbW1vbi9ydW50aW1lL3J1bnRpbWUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRhc2sgZXh0ZW5kcyBSdW50aW1lIGltcGxlbWVudHMgSVRhc2sge1xyXG5cclxuICAgIHN0YXRpYyBzdWJzY3JpcHRpb25zOiB7W2tleTogc3RyaW5nXTogRnVuY3Rpb259ID0ge307XHJcblxyXG4gICAgc3RhdGljIGdldCBpblBheWxvYWRTaWduKCk6IEFycmF5PHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybiBbJ2Ftb3VudCcsJ3RvJ11cclxuICAgIH1cclxuXHJcbiAgICBjb25uZWN0KCk6IFByb21pc2U8SnNvblBheWxvYWQ+IHtcclxuICAgICAgICByZXR1cm4gTWVzc2FnZUJ1aWxkZXIucHJvbWlzZShcclxuICAgICAgICAgICAgSnNvblJwY01ldGhvZC5BdXRob3JpemF0aW9uLCBcclxuICAgICAgICAgICAge31cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGFjY291bnRzKCl7fVxyXG5cclxuICAgIC8vIFRPRE8gbmVlZHMganNvbiBhbmQgcmF3IHBheWxvYWQgc3VwcG9ydCBhbmQgY29tcGxldGUgYXJndW1lbnQgc3VwcG9ydFxyXG4gICAgc2lnbihcclxuICAgICAgICBwYXJhbXM6IFRyYW5zYWN0aW9uLCBcclxuICAgICAgICBlcnJvcjogUmVxdWVzdEVycm9ycyA9IFJlcXVlc3RFcnJvcnMuTm9uZVxyXG4gICAgKTogUHJvbWlzZTxKc29uUGF5bG9hZD4ge1xyXG4gICAgICAgIGlmKCFzdXBlci5yZXF1aXJlZEFyZ3MoVGFzay5pblBheWxvYWRTaWduLE9iamVjdC5rZXlzKHBhcmFtcykpKXtcclxuICAgICAgICAgICAgZXJyb3IgPSBSZXF1ZXN0RXJyb3JzLkludmFsaWRUcmFuc2FjdGlvblBhcmFtcztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIE1lc3NhZ2VCdWlsZGVyLnByb21pc2UoXHJcbiAgICAgICAgICAgIEpzb25ScGNNZXRob2QuU2lnblRyYW5zYWN0aW9uLCBcclxuICAgICAgICAgICAgcGFyYW1zLFxyXG4gICAgICAgICAgICBlcnJvclxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcXVlcnkoXHJcbiAgICAgICAgbWV0aG9kOiBTdXBwb3J0ZWRBbGdvZCxcclxuICAgICAgICBwYXJhbXM6IEpzb25QYXlsb2FkLFxyXG4gICAgICAgIGVycm9yOiBSZXF1ZXN0RXJyb3JzID0gUmVxdWVzdEVycm9ycy5Ob25lXHJcbiAgICApOiBQcm9taXNlPEpzb25QYXlsb2FkPntcclxuXHJcbiAgICAgICAgbGV0IHJlcXVlc3Q6IEpzb25QYXlsb2FkID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcclxuICAgICAgICAgICAgcGFyYW1zOiBwYXJhbXNcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gTWVzc2FnZUJ1aWxkZXIucHJvbWlzZShcclxuICAgICAgICAgICAgSnNvblJwY01ldGhvZC5BbGdvZCwgXHJcbiAgICAgICAgICAgIHJlcXVlc3QgYXMgSnNvblBheWxvYWQsXHJcbiAgICAgICAgICAgIGVycm9yXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzdWJzY3JpYmUoXHJcbiAgICAgICAgZXZlbnROYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgY2FsbGJhY2s6IEZ1bmN0aW9uXHJcbiAgICApIHtcclxuICAgICAgICBUYXNrLnN1YnNjcmlwdGlvbnNbZXZlbnROYW1lXSA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG59Il19