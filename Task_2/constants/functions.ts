import superAgent from "superagent";


  export async function getApiResponse(url: string): Promise<any> {
    try {
      const response = await superAgent.get(url);
      return response;
    } catch (err: any) {
      return err;
    }
  }
  
  export async function postApiResponse(url: string, data: any): Promise<any> {
    try {
      const response = await superAgent
        .post(url)
        .set("Content-Type", "application/json")
        .send(data);
      return response;
    } catch (err: any) {
      return err;
    }
  }
  
  export async function putApiResponse(url: string, data: any): Promise<any> {
    try {
      const response = await superAgent
        .put(url)
        .set("Content-Type", "application/json")
        .send(data);
      return response;
    } catch (err: any) {
      return err;
    }
  }

  export async function patchApiResponse(url: string, data: any): Promise<any> {
    try {
      const response = await superAgent
        .patch(url)
        .set("Content-Type", "application/json")
        .send(data);
      return response;
    } catch (err: any) {
      return err;
    }
  }

  export async function deleteApiResponse(url: string): Promise<any> {
    try {
      const response = await superAgent.delete(url);
      return response;
    } catch (err: any) {
      return err;
    }
  }