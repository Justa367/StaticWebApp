import logging
import azure.functions as func

def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Przetwarzanie żądania w funkcji hello.')
    return func.HttpResponse("Cześć! To odpowiedź z funkcji API 'hello'.")
